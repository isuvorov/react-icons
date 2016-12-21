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

var IoMusicNote = function (_React$Component) {
    _inherits(IoMusicNote, _React$Component);

    function IoMusicNote() {
        _classCallCheck(this, IoMusicNote);

        return _possibleConstructorReturn(this, (IoMusicNote.__proto__ || Object.getPrototypeOf(IoMusicNote)).apply(this, arguments));
    }

    _createClass(IoMusicNote, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.3 2.5c0.9 0 1.7 0.7 1.7 1.6v23.7s-0.2 3.4-0.9 4.3c-0.7 1.2-2 1.7-3.4 1.7h-2.9c-2.2 0-4.1-1.6-4.1-3.8s1.9-3.7 4.1-3.7h4.7v-15l-16.2 2.9v18.1c0 0.7-0.3 2.2-1.1 3.2 0 0.2-0.1 0.3-0.2 0.4 0 0.1-0.1 0.1-0.2 0.2-0.7 0.9-1.8 1.4-2.9 1.4h-2.9c-2.2 0-4-1.6-4-3.7s1.8-3.8 4-3.8h4.8v-22.3c0-1.1 1-2.2 2.1-2.5l17-2.6s0.2-0.1 0.4-0.1z' })
                )
            );
        }
    }]);

    return IoMusicNote;
}(React.Component);

exports.default = IoMusicNote;
module.exports = exports['default'];