import ParallelsService from './API/ParalelsService'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AuthorsService from './API/AuthorsService'
import { useFetching } from './hooks/useFetching'
import PiecesService from './API/PiecesService'
import StudentsService from './API/StudentsService'
import MyInput from './components/UI/MyInput/MyInput'

function App() {

    const [authorsList, setAuthorsList] = useState([{ id: 0, name: '' }])
    const [author, setAuthor] = useState('')
    const [parallelsList, setParallelsList] = useState([{ main_class: 0, parallel_number: 0 }])
    const [piecesList, setPiecesList] = useState([{ id: 0, author: { id: 0, name: '' }, name: '' }])
    const [studentsList, setStudentsList] = useState([{ class_index: 0, class_number: 0, id: 0, name: '', patronymic: '', surname: '' }])
    const [student, setStudent] = useState({ class_index: 0, class_number: 0, id: 0, name: '', patronymic: '', surname: '' })


    const [getParallelssList, isParallelsListGetLoading, ParalllelsListGetError] = useFetching(async () => {
        const response = await ParallelsService.getParallelsList()
        setParallelsList(response)
    })

    const [getAuthorsList, isAuthorsListGetLoading, AuthorsListGetError] = useFetching(async () => {
        const response = await AuthorsService.getAuthorsList()
        setAuthorsList(response)
    })

    const [getAuthorsById, isAuthorsByIdGetLoading, AuthorsByIdGetError] = useFetching(async (id) => {
        const response = await AuthorsService.getAuthorsById(id)
        setAuthor(response.name)
    })

    const [getPiecesList, isPiecesListGetLoading, PiecesListGetError] = useFetching(async () => {
        const response = await PiecesService.getPiecesList()
        setPiecesList(response)
    })

    const [getStudentsList, isStudentsListGetLoading, StudentsListGetError] = useFetching(async () => {
        const response = await StudentsService.getStudentsList()
        setStudentsList(response)
        console.log(studentsList)
    })

    const [getStudentById, isStudentByIdGetLoading, StudentByIdGetError] = useFetching(async (id) => {
        const response = await StudentsService.getStudentById(id)
        setStudent(response)
        console.log(student)
    })

    useEffect(() => {
        // @ts-ignore
        getAuthorsById(3)
        // @ts-ignore
        getAuthorsList()
        // @ts-ignore
        getParallelssList()
        // @ts-ignore
        getPiecesList()
        // @ts-ignore
        getStudentsList()
        // @ts-ignore
        getStudentById(1)
    }, [])



    return (
        <div className="App">
            <h1>Authors List</h1>
            {authorsList.map((aut, id) =>
                <div id={id.toString()}>
                    {aut.name}
                </div>
            )}
            <hr />
            <h1>Author</h1>
            {author}
            <hr />
            <h1>Paralels</h1>
            {parallelsList.map((parallel, id) =>
                <div id={id.toString()}>
                    {parallel.main_class} - {parallel.parallel_number}
                </div>
            )}
            <hr />
            <h1>Pieces</h1>
            {piecesList.map((piece, id) =>
                <div id={id.toString()}>
                    {piece.name}, {piece.author.name}
                </div>
            )}
            <hr />
            <h1>Students</h1>
            {studentsList.map((stu, id) =>
                <div id={id.toString()}>
                    {stu.class_number}-{stu.class_index}: {stu.name} {stu.patronymic} {stu.surname}
                </div>
            )}
            <hr />
            <h1>Student</h1>
            {student.class_number}-{student.class_index}: {student.name} {student.patronymic} {student.surname}
            <hr />
            <MyInput placeholder='Add new student' />
        </div>
    );
}

export default App;


    // const [postAuthorsList, isAuthorsListPostLoading, AuthorsListPostError] = useFetching(async (id) => {
    //     await AuthorsService.postAuthorsList([{ id: 1, name: 'Автор1' }, { id: 2, name: 'Автор2' }, { id: 3, name: 'Автор3' }, { id: 4, name: 'А.С.Пушкин' }, { id: 5, name: 'Греков' }])
    //     const response = await AuthorsService.getAuthorsList()
    // })asdf