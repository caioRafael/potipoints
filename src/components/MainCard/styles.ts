import styled from "styled-components";
import { shade } from 'polished';

interface MainCardProps {
	reveled: boolean;
	hasVote: boolean;
}

export const MainCardStyles = styled.div<MainCardProps>`
    display: flex;
    flex-direction: column;
    align-items:  center;
    justify-content: center;
    gap: 4px;
    width: 100px;
    
    strong {
			margin-top: 4px;
    }

		.card-inner {
			transform: ${props => props.reveled ? 'rotateY(180deg)' : ''};
			
			width: 80px;
			height: 110px;
			transform-style: preserve-3d;
			position: relative;
			transition: all .5s;
		}
    
    .card-front, .card-back {
			position: absolute;
			display: flex;
			flex-direction: column;
			align-items:  center;
			padding: 12px;
			justify-content: center;
			border-radius: 8px;
			border: solid 2px ${props => props.hasVote ? shade(0.1, props.theme.colors.primary) : props.theme.colors.border};
			span {
				font-size: 32px;
				font-weight: bold;
			}
			
			width: 100%;
			height: 100%;
			backface-visibility: hidden;

			transition: all .2s;
    }

		.card-front {
			background-color: ${props => props.theme.colors.background};
			transform: rotateY(180deg);
		}
		
		.card-back {
			background-color: ${props => props.hasVote ? props.theme.colors.primary : props.theme.colors.white};
			transform: rotateY(0deg);
			-moz-transform: ${props => props.reveled ? 'rotateY(90deg)' : 'rotateY(0deg)'};
		}

`