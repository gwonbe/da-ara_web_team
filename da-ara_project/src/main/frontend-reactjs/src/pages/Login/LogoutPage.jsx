const LogoutPage = () => {
  return (
    <form action="/logout-confirm" method="get">
      <h2>로그아웃</h2>
      <p>로그아웃 하시겠습니까?</p>
      <button type="submit">로그아웃</button>
    </form>
  );
};

export default LogoutPage;
