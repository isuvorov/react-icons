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

var IoDisc = function (_React$Component) {
    _inherits(IoDisc, _React$Component);

    function IoDisc() {
        _classCallCheck(this, IoDisc);

        return _possibleConstructorReturn(this, (IoDisc.__proto__ || Object.getPrototypeOf(IoDisc)).apply(this, arguments));
    }

    _createClass(IoDisc, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 12.4c4.2 0 7.6 3.4 7.6 7.6s-3.4 7.6-7.6 7.6-7.6-3.4-7.6-7.6 3.4-7.6 7.6-7.6z m0 11c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4-3.4 1.5-3.4 3.4 1.5 3.4 3.4 3.4z m0-20.9c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m0 27.1c5.3 0 9.6-4.3 9.6-9.6s-4.3-9.6-9.6-9.6-9.6 4.3-9.6 9.6 4.3 9.6 9.6 9.6z' })
                )
            );
        }
    }]);

    return IoDisc;
}(React.Component);

exports.default = IoDisc;
module.exports = exports['default'];