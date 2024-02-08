import Feedback  from './Feedback/Feedback';

export default function  App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '40px',
        }}
      >
        Feedback
      </h1>
      <Feedback />
    </div>
  );
};
