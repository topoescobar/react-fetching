export default function User({ user }) {
  return (
    <div>
      <p>
        {" "}
        Nombre: {user.name}, Email: {user.email}
      </p>
    </div>
  );
}
