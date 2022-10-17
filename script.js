let menu;
let students = [];
let studentsList = [];

function UploadData() {
    let n1
    let n2
    let name = prompt("Insira o nome do aluno")
    let index = studentsList.indexOf(name)

    if (studentsList.length == 0) {
        if (name == "") {
            while (name == "") {
                name = prompt("Nome inválido, favor inserir novamente")
            }
        }
    } else {
        while(name == "" || index !== -1) {
            if (name == "") {
                name = prompt("Nome inválido, favor inserir novamente")
            }
            if (index !== -1) {
                alert("Aluno já cadastrado")
                name = prompt("Insira o nome do aluno")
            }
            index = studentsList.indexOf(name)
        }
    }

    n1 = Number(prompt("Insira a nota da primeira prova"))
    if (n1 < 0 || n1 > 10) {
        while (n1 < 0 || n1 > 10) {
            alert("Valor inserido inválido")
            n1 = Number(prompt("Insira a nota da primeira prova"))
        }
    }

    n2 = Number(prompt("Insira a nota da segunda prova"))
    if (n2 < 0 || n2 > 10) {
        while (n2 < 0 || n2 > 10) {
            alert("Valor inserido inválido")
            n2 = Number(prompt("Insira a nota da segunda prova"))
        }
    }
    
    let student = {};
    student["name"] = name;
    student["n1"] = n1
    student["n2"] = n2

    students.push(student)
    studentsList.push(name)
}

function CheckStudents() {
    if (studentsList.length == 0) {
        return "Nenhum estudante cadastrado"
    } else {
        return studentsList
    }
}

function CalcAvg(n1, n2) {
    return ((n1 + n2) / 2).toFixed(2)
}

function VerifyStatus(studentIndex) {
    let avg = CalcAvg(studentIndex.n1, studentIndex.n2)
    let status;
    if (avg >= 7) {
        status = "Aprovado"
    } else if (avg >= 3) {
        status = "Exame final"
    } else {
        status = "Reprovado"
    }
    return status
}

function Option3() {
    if (students.length == 0) {
        return "Nenhum estudante cadastrado"
    } else {
    let studentSelected = prompt(`
        Lista de estudantes: ${CheckStudents()}
        Insira o nome do aluno que você gostaria de ver o status: 
        `)
    
    let index = CheckStudents().indexOf(studentSelected)

    if (index == -1) {
        alert("Estudante não cadastrado")
    } else {
        return `
            Aluno: ${students[index].name} 
            Média: ${CalcAvg(students[index].n1, students[index].n2)}
            Status: ${VerifyStatus(students[index])}
        `
        }
    }
}

while (menu != 4) {
    menu = prompt(`
        Olá usuário! O que você gostaria de fazer?

        1. Inserir dados de aluno
        2. Verificar alunos cadastrados
        3. Verificar status dos alunos
        4. Sair do menu
    `)

    if (menu == 1) {
        UploadData()
    } 
    else if (menu == 2) {
        alert(CheckStudents())
    } 
    else if (menu == 3) {
        alert(Option3())
    } 
    else if (menu == 4) {
        alert("Obrigado, até a próxima!")
    } 
    else {
        alert("Opção inválida, tente novamente.")
    }
}
