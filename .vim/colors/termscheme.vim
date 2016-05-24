" File: termscheme.vim
" Version: 1.0
" Author: hickop <hickop@gmail.com>
" Description: vim terminal colorscheme based on user .Xresources colors.

hi clear

if exists("syntax_on")
    syntax reset
endif

let g:colors_name="termscheme"

hi Normal       ctermfg=15  ctermbg=0

hi NonText      ctermfg=8               cterm=NONE
hi ErrorMsg     ctermfg=bg  ctermbg=1
hi IncSearch    ctermfg=bg  ctermbg=fg  cterm=NONE
hi Search       ctermfg=bg  ctermbg=3
hi MoreMsg      ctermfg=fg              cterm=NONE
hi LineNr       ctermfg=8   ctermbg=7  
hi CursorLineNr ctermfg=fg  ctermbg=7  
hi Question     ctermfg=fg              cterm=NONE
hi StatusLine   ctermfg=fg  ctermbg=7   cterm=NONE
hi StatusLineNC ctermfg=8   ctermbg=7   cterm=NONE
hi VertSplit    ctermfg=7   ctermbg=7   cterm=NONE
hi Title        ctermfg=fg              cterm=NONE
hi Visual       ctermfg=bg  ctermbg=fg
hi WarningMsg   ctermfg=fg              cterm=NONE
hi WildMenu     ctermfg=bg  ctermbg=3  
hi Folded       ctermfg=fg  ctermbg=7  
hi FoldColumn   ctermfg=fg  ctermbg=7  
hi DiffAdd      ctermfg=bg  ctermbg=6  
hi DiffChange   ctermfg=bg  ctermbg=4 
hi DiffDelete   ctermfg=1   ctermbg=bg  cterm=NONE
hi DiffText     ctermfg=bg  ctermbg=6   cterm=NONE
hi SignColumn   ctermfg=fg  ctermbg=bg
hi Pmenu        ctermfg=bg  ctermbg=8  
hi PmenuSel     ctermfg=fg  ctermbg=8  
hi PmenuSbar                ctermbg=8  
hi PmenuThumb   ctermfg=fg
hi TabLine      ctermfg=8   ctermbg=7   cterm=NONE
hi TabLineSel   ctermfg=fg  ctermbg=bg  cterm=NONE
hi TabLineFill  ctermfg=bg  ctermbg=7   cterm=NONE
hi CursorLine               ctermbg=7   cterm=NONE
hi ColorColumn              ctermbg=7   cterm=NONE

hi MatchParen   ctermfg=bg  ctermbg=3  
hi Comment      ctermfg=8  
hi Constant     ctermfg=6  
hi Error        ctermfg=fg  ctermbg=3  
hi Identifier   ctermfg=6               cterm=NONE
hi PreProc      ctermfg=4               cterm=NONE
hi Special      ctermfg=3
hi Statement    ctermfg=3               cterm=NONE
hi Todo         ctermfg=5   ctermbg=bg  
hi Type         ctermfg=2               cterm=NONE
