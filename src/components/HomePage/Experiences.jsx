import ex1 from '../img/ex1.jpg'
import ex2 from '../img/ex2.jpg'
import ex3 from '../img/ex3.jpg'
import ex4 from '../img/ex4.jpg'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
export default function(){
    const experiences = [
                              {id:ex1,
                                LinkImg:ex1,
                                LinkText:"Đồ mặc trong"
                              },
                              {id:ex2,
                                LinkImg:ex2,
                                LinkText:"Mặc Hàng Ngày"
                              },
                              {id:ex3,
                                LinkImg:ex3,
                                LinkText:"Đồ Thể Thao"
                              },
                              {id:ex4,
                                LinkImg:ex4,
                                LinkText:"Tất cả"
                              }
        
                        ]
    return(
         <>
         <div className="container">
            <p style={{textAlign: "center", marginTop:"40px", fontSize:"14px", fontWeight:"500"}}>Dòng sản phảm mặc cơ bản <i style={{color:"blue"}}>chất lượng tốt</i> và<i style={{color:"blue"}}> giá rẻ </i> của Coolmate</p>
              <div className='ex-btn'>
                <Button>
                  <Link className='ex-btn-link' to="">Trải nghiệm </Link>
                </Button>
              </div>
             <div className='row'>  

              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 experiences-link'>
                 <div className='card-ex'>
                  {
                    experiences.map((ex) =>{
                      return(
                        <div key={ex.id}>
                              <div className='ex-img'>
                                <img src={ex.LinkImg}></img>
                               </div>
                               <div className='ex-link'>
                                   <Link to = ""> {ex.LinkText}</Link>
                               </div>
                        </div>
                      )
                    })
                  }
                  </div>       
                           
                  
             </div>
             </div>
         </div>
         </>
    )
}