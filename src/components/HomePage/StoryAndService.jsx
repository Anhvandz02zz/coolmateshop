import story from '../img/story.jpg'
import sevire from '../img/sevire.jpg'

export default function StoryAndService(){

const SaS = [
            { id:"sas1",
              LinkImgS:story,
              LinkText:"Câu chuyện Coolmate"
             },
             {
              id:"sas12",
              LinkImgS:sevire,
              LinkText:"Dịch vụ hài lòng 100%"
             }
            ]
return(
        <div className='container'>
            <div className='row'>
                {
                    SaS.map((sas) => {
                        return(
                        <div key={sas.id} className='col-sm-6 col-xs-6 col-md-6 sas-link'> 
                          <div className='sas-img'>                    
                            <img src={sas.LinkImgS} /> 
                          </div>   
                        </div>
                        )
                    })
                }
            </div>
        </div>
     )
}