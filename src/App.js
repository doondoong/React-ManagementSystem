import './App.css';
import Customer from './components/Customer';

const customers = [
    {
        id: 1,
        image: "https://placeimg.com/64/64/1",
        name: "홍길동",
        birthday: "900101",
        gender: "남자",
        job: "대학생",
    },
    {
        id: 2,
        image: "https://placeimg.com/64/64/2",
        name: "김자반",
        birthday: "850206",
        gender: "남자",
        job: "프로그래머",
    },
    {
        id: 3,
        image: "https://placeimg.com/64/64/3",
        name: "김둔둥",
        birthday: "201123",
        gender: "남자",
        job: "아기",
    }
];

function App() {
  return (
      <div>
        {
          customers.map(c=>{
            return (
              <Customer
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job} 
                key={c.id}
                />
            )
          })
        }
      </div>
  );
}


export default App;
