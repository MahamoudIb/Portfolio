import { useCallback, useState } from "react";
import api from "../service/api";

import type { Project } from "../types";
import { useEffectOnce } from "./useEffectOnce";

type Status  = "idle" | "loading" | "error" | "success" | "fetching";

export function useProjects() {
    const [status, setStatus] = useState<Status>("idle");
    const [data, setData] = useState<Project[]>([]);

    const [error, setError] = useState<string | null>(null);

    const isFetching = status === "fetching";
    const isLoading = status === "loading" || isFetching;
    const isError = status === "error" || !!error;
    const isIdle = status === "idle";
    const isSuccess = status === "success";

    const resetToIdle = useCallback(
        (timeout = 2000) =>
          setTimeout(() => {
            setStatus("idle");
          }, timeout),
        []
      );

      const fetchData = useCallback(async () => {
        try {
          setStatus("loading");
          const result = await api.getProjects();
    
          setData(result?.data ?? []);
    
          setStatus("success");
        } catch (error) {
          setStatus("error");
          setError("Feilet ved henting av data");
        } finally {
          resetToIdle();
        }
      }, [resetToIdle]);
    
      useEffectOnce(fetchData);

      const add = async (data: Omit<Project, 'id' |'publishedAt' | 'updatedAt'>) => {
        try {
          setStatus("loading");
          await api.create(data);
          await fetchData();
          setStatus("success");
        } catch (error) {
          setStatus("error");
          setError("Failed creating habit");
        } finally {
          resetToIdle();
        }
      };

      const remove = async (id: string) => {
        try {
          setStatus("loading");
          await api.remove(id);
          await fetchData();
          setStatus("success");
        } catch (error) {
          setStatus("error");
          setError("Failed removing item");
        } finally {
          resetToIdle();
        }
      };

      return {
        add,
        remove,
        get: fetchData,
        data,
        error,
        status: {
          idle: isIdle,
          loading: isLoading,
          success: isSuccess,
          error: isError,
          fetching: isFetching,
        },
      };
}

export default useProjects;