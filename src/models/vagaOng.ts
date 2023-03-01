import { Model,DataTypes } from "sequelize"
import { StringifyOptions } from "querystring";
import {sequelize} from '../instances/mysql'


export interface vagaOngInstance extends Model{
    codVaga: number,
    Vaga: string,
    Categoria: string,
    Descricao: string,
    Periodo: string,
    Horario: String
}

export const VagasONG = sequelize.define<vagaOngInstance>("VagasONG,",{
    codVaga: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Vaga:{     
        type: DataTypes.STRING,
        allowNull:false
    },    
    Categoria:{     
        type: DataTypes.STRING,
        allowNull:false
    },    
    Descricao:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Periodo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Horario:{
        type: DataTypes.STRING,
        allowNull:false
    },
},
{
    tableName: "tbvagaong",
    timestamps:false
})