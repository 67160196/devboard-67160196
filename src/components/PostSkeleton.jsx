function PostSkeleton() {
  return (
    <div>
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            background: "white",
          }}
        >
          <div
            style={{
              background: "#e2e8f0",
              borderRadius: "4px",
              height: "1.2rem",
              width: "60%",
              marginBottom: "0.75rem",
            }}
          />
          <div
            style={{
              background: "#e2e8f0",
              borderRadius: "4px",
              height: "0.8rem",
              width: "100%",
              marginBottom: "0.5rem",
            }}
          />
          <div
            style={{
              background: "#e2e8f0",
              borderRadius: "4px",
              height: "0.8rem",
              width: "90%",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default PostSkeleton;
