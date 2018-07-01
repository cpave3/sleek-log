const esc = '\x1b';

const styles = {
    reset: 0,
};

const colors = {
    black:   30,
    red:     31, 
    green:   32,
    yellow:  33,
    blue:    34,
    magenta: 35,
    cyan:    36, 
    white:   37,
};

const ansiForeground = {
    FgRed:     `${esc}[${colors.red}m`,
    FgBlack:   `${esc}[${colors.black}m`,
    FgGreen:   `${esc}[${colors.green}m`,
    FgYellow:  `${esc}[${colors.yellow}m`,
    FgBlue:    `${esc}[${colors.blue}m`,
    FgMagenta: `${esc}[${colors.magenta}m`,
    FgCyan:    `${esc}[${colors.cyan}m`,
    FgWhite:   `${esc}[${colors.white}m`,
};

const ansiBackground = {
    BgRed: `${esc}[41m`
};

const ansiStyles = {
    reset: `${esc}[${styles.reset}m`
};

module.exports = Object.assign(ansiForeground, ansiBackground, ansiStyles);
