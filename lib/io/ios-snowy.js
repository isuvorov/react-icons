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

var IoIosSnowy = function (_React$Component) {
    _inherits(IoIosSnowy, _React$Component);

    function IoIosSnowy() {
        _classCallCheck(this, IoIosSnowy);

        return _possibleConstructorReturn(this, (IoIosSnowy.__proto__ || Object.getPrototypeOf(IoIosSnowy)).apply(this, arguments));
    }

    _createClass(IoIosSnowy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.7 24.8c0.3 0.1 0.4 0.5 0.2 0.8s-0.5 0.4-0.8 0.3l-2.3-1.4c-0.2 0.7-0.2 1.3 0 1.9 0.1 0.3-0.2 0.7-0.5 0.8s-0.7-0.2-0.8-0.5c-0.1-0.9-0.2-1.9 0.1-2.8l-5-2.8v5.7c0.9 0.2 1.7 0.6 2.4 1.2 0.3 0.3 0.4 0.7 0.1 0.9s-0.6 0.3-0.8 0.1c-0.5-0.4-1-0.8-1.7-1v2.6c0 0.3-0.3 0.6-0.6 0.6s-0.6-0.3-0.6-0.6v-2.6c-0.6 0.2-1.2 0.6-1.7 1-0.2 0.2-0.6 0.1-0.8-0.1s-0.3-0.6 0-0.9c0.7-0.6 1.5-1 2.5-1.2v-5.7l-5.1 2.8c0.3 0.9 0.3 1.8 0.2 2.7-0.1 0.3-0.4 0.7-0.7 0.6s-0.7-0.5-0.6-0.8c0.2-0.6 0.2-1.2 0-1.9l-2.3 1.4c-0.3 0.1-0.7 0-0.8-0.3s-0.1-0.7 0.2-0.8l2.3-1.3c-0.5-0.5-1-0.8-1.7-1-0.3-0.1-0.4-0.5-0.4-0.8 0.2-0.3 0.5-0.5 0.8-0.4 1 0.3 1.7 0.9 2.4 1.5l5.1-2.8-5.1-2.9c-0.7 0.7-1.4 1.2-2.4 1.5-0.3 0.1-0.7 0-0.8-0.3s0.1-0.8 0.4-0.9c0.7-0.2 1.2-0.4 1.7-0.9l-2.3-1.3c-0.3-0.1-0.4-0.5-0.2-0.8s0.5-0.4 0.8-0.3l2.3 1.3c0.2-0.6 0.2-1.2 0-1.8-0.1-0.3 0.2-0.7 0.6-0.8s0.6 0.2 0.7 0.5c0.1 0.9 0 1.9-0.2 2.8l5.1 2.8v-5.7c-1-0.2-1.8-0.6-2.5-1.2-0.3-0.3-0.3-0.7 0-0.9s0.6-0.3 0.8-0.1c0.5 0.4 1.1 0.8 1.7 1v-2.6c0-0.3 0.3-0.6 0.6-0.6s0.6 0.3 0.6 0.6v2.6c0.7-0.2 1.2-0.6 1.7-1 0.2-0.2 0.6-0.1 0.8 0.1s0.2 0.6-0.1 0.9c-0.7 0.6-1.5 1-2.4 1.2v5.7l5-2.8c-0.2-0.9-0.3-1.9-0.1-2.8 0-0.3 0.4-0.6 0.8-0.5s0.5 0.5 0.4 0.8c-0.1 0.6-0.1 1.2 0.1 1.8l2.3-1.3c0.3-0.1 0.7 0 0.8 0.3s0.1 0.7-0.2 0.8l-2.3 1.3c0.5 0.4 1 0.8 1.7 1 0.3 0.1 0.4 0.5 0.4 0.8s-0.5 0.4-0.8 0.4c-1-0.3-1.8-0.8-2.4-1.5l-5 2.8 5 2.8c0.6-0.6 1.4-1.2 2.4-1.5 0.3-0.1 0.7 0.1 0.8 0.4s-0.1 0.7-0.4 0.8c-0.7 0.2-1.2 0.5-1.7 1z' })
                )
            );
        }
    }]);

    return IoIosSnowy;
}(React.Component);

exports.default = IoIosSnowy;
module.exports = exports['default'];