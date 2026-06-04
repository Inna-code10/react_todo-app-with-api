import React from 'react';
import { ErrorType } from '../types/ErrorType';

type Props = {
  errorMessage: ErrorType;
  clearError: () => void;
};

export const ErrorNotification: React.FC<Props> = ({
  errorMessage,
  clearError,
}) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={`
        notification
        is-danger
        is-light
        has-text-weight-normal
        ${!errorMessage ? 'hidden' : ''}
      `}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={clearError}
      />

      {errorMessage}
    </div>
  );
};
