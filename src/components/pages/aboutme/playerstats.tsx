import React from 'react';
import Player from '../../common/player';
import '../../../css/misc.css';
import '../../../css/playerstats.css';
import Title from '../../common/title';
import { useSelector } from 'react-redux';
import { AppState, IStats } from '../../../types/interfaces';


const PlayerStats: React.FC = () => {

    const {
        name,
        age,
        occupation,
        status,
        skills,
        hobby,
        toolsUsed
    } = useSelector((state: AppState): IStats => {
        return state.data.stats;
    })


    return (
        <div className="player-stat">
            <Title text="player stats"/>
            <div className="row">
                <div className="col-12 col-lg-4 text-center">
                    <Player inMenu={true}/>
                    <p className="mt-4 size-50 color-red">Lv. 1</p>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="orange-panel size-30 text-white text-left">
                        <div className="d-flex flex-row">
                            <p><span className="color-cyan">name:</span> {name}</p>
                            <p className="tab"><span className="color-cyan">age:</span> {age}</p>
                        </div>
                        <p><span className="color-cyan">occupation:</span> {occupation}</p>
                        <p><span className="color-cyan">status:</span><br/><span className="size-25">{status}</span></p>
                    </div>
                </div>
            </div>
            <div className="row mt-3 second-row">
                <div className="col-12 col-lg-4">
                    <div className="orange-panel size-25 text-white text-left p-3 player-skills">
                        <p className="color-purple size-35 mb-0">Tools Used</p>
                        <ul>
                            {
                                toolsUsed.map((val) => {
                                    return <li>{val}</li>
                                })
                            }
                        </ul>
                        
                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="orange-panel size-25 text-white text-left p-3 player-skills">
                        <p className="color-purple size-35 mb-0">Hobby</p>
                        <ul>
                            {
                                hobby.map((val) => {
                                    return <li>{val}</li>
                                })
                            }
                        </ul>
                        
                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="orange-panel size-25 text-white text-left p-3 player-skills">
                        <p className="color-purple size-35 mb-0">Skills</p>
                        <ul>
                            {
                                skills.map((val) => {
                                    return <li>{val}</li>
                                })
                            }
                        </ul>
                        
                        </div>

                        </div>
                    </div>
                </div>
                

    );
}

export default PlayerStats;