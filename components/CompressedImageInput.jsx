import { useCallback, useRef, useState } from 'react';
import { Button, Card, Flex, Stack, Text, Spinner } from '@sanity/ui';
import imageCompression from 'browser-image-compression';

const COMPRESSION_OPTIONS = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function CompressedUploadSource(props) {
  const { onSelect, onClose } = props;
  const fileInputRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [info, setInfo] = useState(null);

  const handleFileChange = useCallback(
    async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const originalSize = file.size;
      setStatus('compressing');
      setInfo(`Original: ${formatSize(originalSize)}`);

      try {
        const compressed = await imageCompression(file, COMPRESSION_OPTIONS);
        const compressedSize = compressed.size;
        const savings = ((1 - compressedSize / originalSize) * 100).toFixed(0);

        setInfo(
          `${formatSize(originalSize)} → ${formatSize(compressedSize)} (${savings}% smaller)`
        );
        setStatus('done');

        onSelect([
          {
            kind: 'file',
            value: compressed,
          },
        ]);
      } catch (err) {
        console.error('Image compression failed:', err);
        setStatus('error');
        setInfo('Compression failed. Uploading original...');
        onSelect([{ kind: 'file', value: file }]);
      }
    },
    [onSelect]
  );

  return (
    <Card padding={4}>
      <Stack space={4}>
        <Text size={2} weight="semibold">
          Compress & Upload Image
        </Text>
        <Text size={1} muted>
          Images are compressed to max 1 MB and 1920px before uploading.
        </Text>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        <Flex gap={3} align="center">
          <Button
            text="Choose Image"
            tone="primary"
            onClick={() => fileInputRef.current?.click()}
            disabled={status === 'compressing'}
          />
          <Button text="Cancel" mode="ghost" onClick={onClose} />
          {status === 'compressing' && <Spinner />}
        </Flex>

        {info && (
          <Card padding={3} radius={2} tone={status === 'error' ? 'critical' : 'positive'}>
            <Text size={1}>{info}</Text>
          </Card>
        )}
      </Stack>
    </Card>
  );
}

CompressedUploadSource.title = 'Compressed Upload';
CompressedUploadSource.icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);
