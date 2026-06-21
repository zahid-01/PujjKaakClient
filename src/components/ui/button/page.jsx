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
    border: 1px solid rgba(27, 94, 59, 0.15);
    background: linear-gradient(120deg, #22c55e 0%, #1B5E3B 55%, #14492e 100%);
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.35s ease, box-shadow 0.35s ease,
      border-color 0.35s ease, background-position 0.5s ease;
    box-shadow: 0 10px 30px rgba(27, 94, 59, 0.2);
    background-size: 180%;
    font-size: 0.8rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .primary-cta::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.25), transparent 60%);
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
      rgba(34, 197, 94, 0.25),
      rgba(27, 94, 59, 0)
    );
    opacity: 0;
    filter: blur(12px);
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  .primary-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(27, 94, 59, 0.35);
    border-color: rgba(27, 94, 59, 0.5);
    background-position: 40%;
  }

  .primary-cta:hover::before {
    opacity: 1;
  }

  .primary-cta:hover::after {
    opacity: 1;
  }

  .primary-cta:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 8px 20px rgba(27, 94, 59, 0.25);
  }

  .primary-cta .icon {
    position: relative;
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: inherit;
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 999px;
  }

  .primary-cta.compact {
    padding: 0.58rem 1.3rem;
    font-size: 0.72rem;
    letter-spacing: 0.05em;
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

  /* Secondary Outline Button Style */
  .primary-cta.outline {
    background: transparent;
    border: 1px solid #1B5E3B;
    color: #1B5E3B;
    box-shadow: none;
  }

  .primary-cta.outline:hover {
    background: rgba(27, 94, 59, 0.06);
    border-color: #1B5E3B;
    box-shadow: 0 0 15px rgba(27, 94, 59, 0.1);
  }
`;

export default Button;
