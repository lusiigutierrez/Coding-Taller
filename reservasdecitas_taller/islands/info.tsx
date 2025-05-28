import { useState } from "preact/hooks";

const Info = ({ targetId, message }: { targetId: string; message: string }) => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleInfo = () => setShowMessage(!showMessage);

  return (
    <div>
      <button type="button" className="info-button" onClick={toggleInfo}>
        ℹ️
      </button>
      {showMessage && (
        <p className="info-message" id={targetId}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Info;
