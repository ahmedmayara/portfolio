export interface ProfileProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

export const Profile = ({ name, role, bio, avatar }: ProfileProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#18181b",
      backgroundImage:
        "linear-gradient(to right, rgba(250,250,250,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,250,250,0.07) 1px, transparent 1px), radial-gradient(circle at 0% 100%, rgba(250,250,250,0.08), transparent 55%)",
      backgroundSize: "48px 48px, 48px 48px, 100% 100%",
      color: "#fafafa",
      display: "flex",
      fontFamily: "Geist",
      gap: "64px",
      height: "100%",
      padding: "80px",
      width: "100%",
    }}
  >
    {avatar ? (
      <img
        alt={name}
        height={300}
        src={avatar}
        style={{
          border: "4px solid rgba(250,250,250,0.15)",
          borderRadius: "999px",
        }}
        width={300}
      />
    ) : (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#3f3f46",
          border: "4px solid rgba(250,250,250,0.15)",
          borderRadius: "999px",
          color: "#fafafa",
          display: "flex",
          flexShrink: 0,
          fontSize: "120px",
          fontWeight: 700,
          height: "300px",
          justifyContent: "center",
          width: "300px",
        }}
      >
        {initials(name)}
      </div>
    )}

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: "72px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
        }}
      >
        {name}
      </div>
      <div
        style={{
          color: "#d4d4d8",
          display: "flex",
          fontSize: "34px",
          fontWeight: 600,
          marginTop: "12px",
        }}
      >
        {role}
      </div>
      <div
        style={{
          color: "#a1a1aa",
          display: "flex",
          fontSize: "24px",
          lineHeight: 1.4,
          marginTop: "24px",
          maxWidth: "960px",
        }}
      >
        {bio}
      </div>
    </div>
  </div>
);
