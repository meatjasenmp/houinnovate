interface ProgressBarProps {
  deployed: number | null | undefined;
  committed: number | null | undefined;
  deployedLabel: string | null | undefined;
  committedLabel: string | null | undefined;
}

const ProgressBar = ({
  deployed,
  committed,
  deployedLabel,
  committedLabel,
}: ProgressBarProps) => {
  return (
    <>
      {deployedLabel && deployedLabel}
      {deployed && deployed}
      {committedLabel && committedLabel}
      {committed && committed}
    </>
  );
};

export default ProgressBar;
