import styled from "@emotion/styled";
const Icon = styled.div<{ isActive?: boolean }>(({ isActive }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: isActive ? "#7c3aed" : "var(--color-text-tertiary)",
  transition: "color 0.18s ease, transform 0.2s ease",
  "> svg": { width: 18, height: 18 },

  [`${Wrapper}:hover`]: {
    transform: "scale(1.15)",
    color: "var(--color-text-primary)",
  },
}));
const Wrapper = styled.div<{ isBlur?: boolean; isActive?: boolean }>(
  ({ isBlur, isActive }) => ({
    display: "grid",
    gridTemplateColumns: "32px minmax(0, 1fr) auto",
    alignItems: "center",
    gap: 8,
    paddingInline: 10,
    userSelect: "none",
    paddingBlock: 8,
    borderRadius: 8,
    cursor: isBlur ? "not-allowed" : "pointer",
    color: isActive ? "#7c3aed" : "var(--color-text-secondary)",
    fontWeight: 500,
    fontSize: 14,
    background: isActive ? "#f5f3ff" : "transparent",
    filter: isBlur ? "blur(2.5px)" : "none",
    opacity: isBlur ? 0.45 : 1,
    pointerEvents: isBlur ? "none" : "auto",
    position: "relative",
    overflow: "hidden",
    transition: "background 0.18s ease, color 0.18s ease, transform 0.15s ease",
    "::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "50%",
      transform: isActive
        ? "translateY(-50%) scaleY(1)"
        : "translateY(-50%) scaleY(0)",
      width: 3,
      height: "60%",
      background: "#7c3aed",
      borderRadius: "0 3px 3px 0",
      transition: "transform 0.2s ease",
    },

    ":hover": {
      background: "rgba(0,0,0,0.04)",
      color: "var(--color-text-primary)",
      transform: "translateX(2px)",
      
    },
    
    ":active": {
      transform: "translateX(2px) scale(0.98)",
    },
  }),
);

const LabelText = styled.div({
  fontSize: 14,
  lineHeight: 1.4,
});

const Indicator = styled.div<{ isActive?: boolean }>(({ isActive }) => ({
  fontSize: 11,
  fontWeight: 500,
  color: isActive ? "var(--color-primary)" : "#9ca3af",
  background: isActive ? "var(--color-primary-subtle, #ede9fe)" : "transparent",
  padding: isActive ? "2px 7px" : "0",
  borderRadius: 20,
  minWidth: 20,
  textAlign: "center",
  transition: "all 0.15s",
}));

export const SidebarMenuBase = {
  Wrapper,
  Icon,
  LabelText,
  Indicator,
};
