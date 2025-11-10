import styled from "styled-components";

const Button = ({ text, onClick, icon, className }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick} className={`primary-cta ${className || ""}`}>
        {icon && <span className="icon">{icon}</span>}
        {text}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .primary-cta {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0.95rem 2.1rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: linear-gradient(120deg, #ff6b80 0%, #d50b23 55%, #7b0615 100%);
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: none;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.35s ease, box-shadow 0.35s ease,
      border-color 0.35s ease, background-position 0.5s ease;
    box-shadow: 0 14px 38px rgba(213, 11, 35, 0.28);
    background-size: 180%;
    font-size: 0.85rem;
  }

  .primary-cta::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.2), transparent 60%);
    opacity: 0.7;
    transition: opacity 0.35s ease;
  }

  .primary-cta::after {
    content: "";
    position: absolute;
    inset: -12px;
    border-radius: inherit;
    background: radial-gradient(
      circle,
      rgba(255, 107, 128, 0.4),
      rgba(213, 11, 35, 0)
    );
    opacity: 0;
    filter: blur(12px);
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  .primary-cta:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(213, 11, 35, 0.38);
    border-color: rgba(255, 255, 255, 0.75);
    background-position: 40%;
  }

  .primary-cta:hover::before {
    opacity: 1;
  }

  .primary-cta:hover::after {
    opacity: 1;
  }

  .primary-cta:active {
    transform: translateY(-2px) scale(0.98);
    box-shadow: 0 14px 28px rgba(213, 11, 35, 0.32);
  }

  .primary-cta .icon {
    position: relative;
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.08));
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: inherit;
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 999px;
  }

  .primary-cta.compact {
    padding: 0.58rem 1.3rem;
    font-size: 0.72rem;
    letter-spacing: 0.035em;
    gap: 7px;
  }

  .primary-cta.compact .icon {
    height: 1.8rem;
    width: 1.8rem;
    font-size: 0.95rem;
  }

  @media (min-width: 768px) {
    .primary-cta.compact {
      padding: 0.62rem 1.45rem;
      font-size: 0.76rem;
    }

    .primary-cta.compact .icon {
      height: 1.9rem;
      width: 1.9rem;
    }
  }
`;

export default Button;
