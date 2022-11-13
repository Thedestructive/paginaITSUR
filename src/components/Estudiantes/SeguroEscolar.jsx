import React from 'react'
import { FaEye } from 'react-icons/fa'
import './EstilosGeneralesEstudiantes.css'
import './SeguroEscolar.css'
export const SeguroEscolar = () => {
  const objetivos = [
    {
      title: 'OBJETIVO GENERAL DEL PROGRAMA',
      list: ['Proporcionar atención e información de la salud a la comunidad del ITSUR y sus visitantes, con un alto sentido de responsabilidad y ética para garantizar una vida sana y promover el bienestar para todas las edades.']
    },
    {
      title: 'OBJETIVOS ESPECÍFICOS',
      list: ['Fomentar la prevención de enfermedades y/o consecuencias de nutrición y obesidad',
        'Brindar orientación a los estudiantes que lo soliciten',
        'Difundir la información pertinente de manera oportuna.']
    },
    {
      title: 'ALCANCE',
      list: ['El presente programa va dirigido a alumnos inscritos, personal docente y administrativo del Instituto Tecnológico Superior del Sur de Guanajuato.']
    },
    {
      title: 'Cualquier duda o aclaración favor de contactar a la encargada del Seguro Escolar',
      list: ['Lic. Giuliana Lizett Martínez Jiménez', 'titulación@itsur.edu.mx', 'Tel. (445) 45 774 68 ext.  *139.']
    }
  ]
  const objetivosIncorporacion = [
    {
      title: 'OBJETIVO GENERAL DEL PROGRAMA',
      list: ['Proporcionar atención e incorporación de los servicios médicos con los que cuenta el estudiante de primer nivel a la comunidad universitaria y sus visitantes, con un alto sentido de responsabilidad y ética.']
    },
    {
      title: 'OBJETIVOS ESPECÍFICOS',
      list: ['Dar aseguramiento al alumnado en instituciones médicas reconocidas.',
        'Brindar orientación a los estudiantes que lo soliciten',
        'Difundir la información pertinente de manera oportuna.']
    },
    {
      title: 'ALCANCE',
      list: ['Es un servicio ofrecido a los alumnos inscritos que no tienen afiliación vigente de alguna institución de seguridad social.',
        'El estudiante asegurado tendrá derecho a las prestaciones en especie del seguro.',
        'Una vez otorgado el número de afiliación el alumno podrá atenderse en la Clínica y tramitar un tarjetón con el que podrán atenderse.',
        'Vigencia del seguro: que el alumno egrese o hasta que efectúe baja del Instituto.']
    },
    {
      title: 'IMSS: SEGURO FACULTATIVO',
      list: ['Asistencia medico quirúrgica', 'Farmacéutica', 'Hospitalaria', 'Asistencia obstétrica', 'Servicios de odontología', 'Embarazo', 'Atención a recién nacidos']
    },
    {
      title: 'Cualquier duda o aclaración favor de contactar a la encargada del Seguro Escolar',
      list: ['Lic. Giuliana Lizett Martínez Jiménez', 'titulación@itsur.edu.mx', 'Tel. (445) 45 774 68 ext.  *139.']
    },
    {
      title: 'GUÍAS',
      list: [],
      subDocumentos: [
        {
          title: 'GUIA PARA SOLICITAR NUMERO DE SEGURIDAD SOCIAL NSS',
          link: 'http://www.itsur.edu.mx/documentos_publicados/control_escolar/2022/seguro_escolar/GUIA_PARA_SOLICITAR_TU_NUMERO_DE_SEGURIDAD_SOCIAL_NSS.pdf'
        },
        {
          title: 'GUIA PARA CONSULTAR SI ESTAN VIGENTES TUS DERECHOS ANTE EL IMSS',
          link: 'http://www.itsur.edu.mx/documentos_publicados/control_escolar/2022/seguro_escolar/GUIA_PARA_CONSULTAR_TU_VIGENCIA_ANTE_EL_IMSS.pdf'
        },
        {
          title: 'GUIA PARA ALTA EN CLÍNICA O UMF (UNIDAD MÉDICA FAMILIAR)',
          link: 'http://www.itsur.edu.mx/documentos_publicados/control_escolar/2022/seguro_escolar/GUIA_PARA_SOLICITAR_CARTILLA_NACIONAL_DE_SALUD.pdf'
        }
      ]
    }
  ]
  return (
    <div className='contenedor-seguro'>
      <h3>PROGRAMA DE BUENA SALUD</h3>
      <div className='documento'>
        <a>Programa de Buena Salud</a>
        <FaEye className='icono-documento' />
      </div>
      <p className='descripcion-seguro'>El programa de Buena Salud surge como respuesta natural y obligatoria a las necesidades de salud integral que mantienen la estabilidad de los estudiantes durante su trayectoria en la institución, así como las del personal docente y administrativo que laboran en el ITSUR.</p>
      <div className='seccion-seguro'>
        {
          objetivos.map((item, idx) => {
            return (
              <div key={idx} className='seccion-info'>
                <p className='titulo-seccion-info'>{item.title}</p>
                {
                  item.list.map((list, index) => {
                    return (
                      <ol key={index} className='info-seccion-estudiante'>{list}</ol>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
      <div className='seccion-seguro'>
        <h3 className='titulo-incorporacion'>PROGRAMA DE INCORPORACIÓN AL SERVICIO MÉDICO</h3>
        <p className='descripcion-seguro'>El Programa de Incorporación al servicio Médico surge como respuesta natural y obligatoria a las necesidades de salud integral que mantienen la estabilidad de los estudiantes durante su trayectoria en la institución, mejorando la calidad, la eficacia y la sostenibilidad de su salud.</p>
        <div className='seccion-seguro'>
          {
            objetivosIncorporacion.map((item, idx) => {
              return (
                <div key={idx} className='seccion-info'>
                  <p className='titulo-seccion-info'>{item.title}</p>
                  {
                    item.list.map((list, index) => {
                      return (
                        <ol key={index} className='info-seccion-estudiante'>{list}</ol>
                      )
                    })
                  }
                  {
                    item.subDocumentos &&
                    item.subDocumentos.map((link, index) => {
                      return (
                        <a href={link.link} key={index} className='link-seguro'>{link.title}</a>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
