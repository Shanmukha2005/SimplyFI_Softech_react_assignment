function UserCard({ user }) {
    // Use dicebear v2 for unique avatar
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`;
  
    return (
      <div className="card">
        <img src={avatarUrl} alt={user.name} className="avatar" />
        <h3>{user.name}</h3>
        <p>📧 {user.email}</p>
        <p>📞 {user.phone}</p>
        <p>🌐 {user.website}</p>
      </div>
    );
  }

export default UserCard;
