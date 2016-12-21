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

var IoIosPersonadd = function (_React$Component) {
    _inherits(IoIosPersonadd, _React$Component);

    function IoIosPersonadd() {
        _classCallCheck(this, IoIosPersonadd);

        return _possibleConstructorReturn(this, (IoIosPersonadd.__proto__ || Object.getPrototypeOf(IoIosPersonadd)).apply(this, arguments));
    }

    _createClass(IoIosPersonadd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 12v1h-2v2h-1v-2h-2v-1h2v-2h1v2h2z m-4.1 16.4c1 0.4 4.1 1.6 4.1 4.1h-25c0-2.5 3.1-3.7 4.1-4.1s2.5-0.4 3.4-0.7c0.5-0.1 1.3-0.4 1.6-0.7s0-3.2 0-3.2-0.4-0.8-0.7-1.4-0.5-2.5-0.5-2.5-0.6 0-0.7-0.9c-0.2-1-0.5-1.3-0.5-2.1 0-0.7 0.4-0.8 0.4-0.8s-0.3-1-0.4-3.3c-0.1-2.6 2-5.3 5.8-5.3s5.9 2.7 5.8 5.3c-0.1 2.3-0.4 3.3-0.4 3.3s0.4 0.1 0.4 0.8c0 0.8-0.3 1.1-0.5 2.2-0.1 0.9-0.7 0.9-0.7 0.9s-0.3 1.8-0.5 2.4-0.7 1.4-0.7 1.4-0.2 2.9 0 3.2 1.1 0.6 1.6 0.7c0.9 0.3 2.3 0.3 3.4 0.7z' })
                )
            );
        }
    }]);

    return IoIosPersonadd;
}(React.Component);

exports.default = IoIosPersonadd;
module.exports = exports['default'];