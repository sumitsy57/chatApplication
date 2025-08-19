
import { useState, ChangeEvent } from 'react';

const useFileHandler = (initial: string) => {
  const [preview, setPreview] = useState<string>(initial);
  const [error, setError] = useState<string>('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // simple validation: max 5MB and image type
    if (!file.type.startsWith('image/')) {
      setError('Only image files are allowed');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('File too large (max 5MB)');
      return;
    }

    setError('');
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return { preview, error, changeHandler };
};

export default useFileHandler;
