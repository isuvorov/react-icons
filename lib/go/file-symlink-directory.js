'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoFileSymlinkDirectory = function (_React$Component) {
    _inherits(GoFileSymlinkDirectory, _React$Component);

    function GoFileSymlinkDirectory() {
        _classCallCheck(this, GoFileSymlinkDirectory);

        return _possibleConstructorReturn(this, (GoFileSymlinkDirectory.__proto__ || Object.getPrototypeOf(GoFileSymlinkDirectory)).apply(this, arguments));
    }

    _createClass(GoFileSymlinkDirectory, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 7.5h-13.7c-0.7 0-1.3-0.6-1.3-1.2v-1.3s-1.2-2.5-2.5-2.5h-12.5c-1.2 0-2.5 1.3-2.5 2.5v27.5h35v-22.5s-1.2-2.5-2.5-2.5z m-30-1.2c0-0.7 0.6-1.3 1.3-1.3h10c0.5 0 1.2 0.6 1.2 1.3v1.2h-12.5v-1.2z m15 21.2v-5c-4.9 0-8.7 2.2-10 7.5 0-8.2 4.2-12.5 10-12.5v-5l10 7.5-10 7.5z' })
                )
            );
        }
    }]);

    return GoFileSymlinkDirectory;
}(React.Component);

exports.default = GoFileSymlinkDirectory;
module.exports = exports['default'];