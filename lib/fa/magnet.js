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

var FaMagnet = function (_React$Component) {
    _inherits(FaMagnet, _React$Component);

    function FaMagnet() {
        _classCallCheck(this, FaMagnet);

        return _possibleConstructorReturn(this, (FaMagnet.__proto__ || Object.getPrototypeOf(FaMagnet)).apply(this, arguments));
    }

    _createClass(FaMagnet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.3 18.6v2.8q0 4.5-2.2 8.1t-6.1 5.6-8.9 2-8.8-2-6.1-5.6-2.2-8.1v-2.8q0-0.6 0.4-1t1-0.5h8.6q0.6 0 1 0.5t0.4 1v2.8q0 1.2 0.6 2t1.1 1.3 1.6 0.7 1.5 0.3 0.9 0 1 0 1.5-0.3 1.5-0.7 1.2-1.3 0.6-2v-2.8q0-0.6 0.4-1t1-0.5h8.6q0.5 0 1 0.5t0.4 1z m-22.9-14.3v8.6q0 0.5-0.4 1t-1 0.4h-8.6q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h8.6q0.6 0 1 0.4t0.4 1z m22.9 0v8.6q0 0.5-0.4 1t-1 0.4h-8.6q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h8.6q0.5 0 1 0.4t0.4 1z' })
                )
            );
        }
    }]);

    return FaMagnet;
}(React.Component);

exports.default = FaMagnet;
module.exports = exports['default'];