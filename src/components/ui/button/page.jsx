import styled from "styled-components";

const Button = ({ text, onClick, icon, className }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick} className={`primary-cta ${className}`}>
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
    padding: 0.9rem 1.8rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: linear-gradient(135deg, #ff4459 0%, #d50b23 55%, #7b0615 100%);
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    box-shadow: 0 12px 25px rgba(213, 11, 35, 0.3);
  }

  .primary-cta::before {
    content: "";
    position: absolute;
    top: -40%;
    left: -40%;
    width: 140%;
    height: 140%;
    background: radial-gradient(
      circle at top,
      rgba(255, 255, 255, 0.45),
      rgba(255, 255, 255, 0)
    );
    transform: rotate(25deg);
    transition: opacity 0.35s ease;
    opacity: 0;
    pointer-events: none;
  }

  .primary-cta:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 35px rgba(213, 11, 35, 0.35);
    border-color: rgba(255, 255, 255, 0.85);
  }

  .primary-cta:hover::before {
    opacity: 1;
  }

  .primary-cta:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 8px 15px rgba(213, 11, 35, 0.35);
  }

  .primary-cta .icon {
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Button;
