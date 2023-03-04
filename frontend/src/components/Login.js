

export default class App extends Component {

    constructor(props){
       super(props);
       this.state = {
          
       }
    }
 
    render() {
       return (
          <>
             <Router>
                <UserContext>
                <Navigation />
                   <Routes>
   users                      <Route index element={<Login/>} />
                         <Route path="/login" element={<Login />} />
                         <Route element={<ProtectedRoute/>} >
                            <Route path="/home" element={<Home/>} />
                            <Route path="/users" element={<Users/>}/>
                            <Route path="/posts" element={<Posts/>}/>
                         </Route>
                         <Route path="*" element={<h1>Page not found 404</h1>} />
                   </Routes>
                </UserContext>
             </Router>
          </>
       )
    };
 }