import React from 'react';

type EmailButtonProps = {
    email: string
}

export default function EmailButton(props: EmailButtonProps) {
    const { email } = props;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert(email);
    };

    return <button type="button" onClick={handleClick}>Kontakt email</button>;
};