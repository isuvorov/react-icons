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

var FaCameraRetro = function (_React$Component) {
    _inherits(FaCameraRetro, _React$Component);

    function FaCameraRetro() {
        _classCallCheck(this, FaCameraRetro);

        return _possibleConstructorReturn(this, (FaCameraRetro.__proto__ || Object.getPrototypeOf(FaCameraRetro)).apply(this, arguments));
    }

    _createClass(FaCameraRetro, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.7 18.6q0-0.3-0.2-0.5t-0.5-0.2q-1.5 0-2.5 1t-1.1 2.5q0 0.3 0.2 0.5t0.5 0.2 0.6-0.2 0.2-0.5q0-0.9 0.6-1.5t1.5-0.6q0.3 0 0.5-0.2t0.2-0.5z m5 2.9q0 2.3-1.7 4t-4 1.7-4-1.7-1.7-4 1.7-4.1 4-1.6 4 1.6 1.7 4.1z m-22.8 12.8h34.2v-2.9h-34.2v2.9z m25.7-12.8q0-3.6-2.5-6.1t-6.1-2.5-6.1 2.5-2.5 6.1 2.5 6 6.1 2.5 6.1-2.5 2.5-6z m-22.9-14.4h8.6v-2.8h-8.6v2.8z m-2.8 4.3h34.2v-5.7h-18.4l-1.5 2.9h-14.3v2.8z m37.1-5.7v28.6q0 1.2-0.8 2t-2.1 0.8h-34.2q-1.2 0-2.1-0.8t-0.8-2v-28.6q0-1.2 0.8-2t2.1-0.8h34.2q1.2 0 2.1 0.8t0.8 2z' })
                )
            );
        }
    }]);

    return FaCameraRetro;
}(React.Component);

exports.default = FaCameraRetro;
module.exports = exports['default'];