import AppRouter from "./router/AppRouter";
import "./styles.scss";

function App() {
  return (
    <div className='App'>
      <AppRouter />
      <footer
        id='sticky-footer'
        className='flex-shrink-0 py-4 bg-dark text-white-50 fixed-bottom'>
        <div className='container text-center'>
          <small>Copyright &copy; Users Management</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
