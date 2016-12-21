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

var IoTrashA = function (_React$Component) {
    _inherits(IoTrashA, _React$Component);

    function IoTrashA() {
        _classCallCheck(this, IoTrashA);

        return _possibleConstructorReturn(this, (IoTrashA.__proto__ || Object.getPrototypeOf(IoTrashA)).apply(this, arguments));
    }

    _createClass(IoTrashA, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.4 10h7.1v2.5h-0.7s-0.4 0.1-0.6 0.3-0.3 0.7-0.3 0.7l-1.5 18.8c-0.2 2.3-0.2 2.7-2.8 2.7h-15.7c-2.6 0-2.6-0.4-2.8-2.7l-1.5-18.9s0-0.4-0.3-0.7-0.6-0.2-0.6-0.2h-0.7v-2.5h7.1v-2.3c0-1.4 1.1-2.7 2.7-2.7h7.9c1.5 0 2.7 1.3 2.7 2.7v2.3z m-11.6-2.3v2.3h10v-2.3c0-0.7-0.8-1.1-1.5-1.1h-7.1c-0.8 0-1.4 0.4-1.4 1.1z m-0.7 22.3h1.6l-0.8-15h-1.6z m6.5 0v-15h-1.7v15h1.7z m4.9 0l0.7-15h-1.5l-0.9 15h1.7z' })
                )
            );
        }
    }]);

    return IoTrashA;
}(React.Component);

exports.default = IoTrashA;
module.exports = exports['default'];