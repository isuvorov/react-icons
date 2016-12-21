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

var FaFlagO = function (_React$Component) {
    _inherits(FaFlagO, _React$Component);

    function FaFlagO() {
        _classCallCheck(this, FaFlagO);

        return _possibleConstructorReturn(this, (FaFlagO.__proto__ || Object.getPrototypeOf(FaFlagO)).apply(this, arguments));
    }

    _createClass(FaFlagO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.2 23.2v-13.4q-3.6 2-6.6 2-1.8 0-3.2-0.7-2.2-1.1-4-1.7t-3.9-0.6q-3.7 0-8.7 2.8v13.1q5.3-2.5 9.4-2.5 1.2 0 2.2 0.2t2.2 0.5 1.7 0.7 1.7 0.9l0.7 0.3q0.9 0.4 2.2 0.4 2.6 0 6.3-2z m-29.2-17.1q0 0.7-0.4 1.4t-1 1v27.5q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-27.5q-0.6-0.4-1-1t-0.4-1.4q0-1.2 0.8-2t2-0.8 2 0.8 0.8 2z m32 1.4v16.6q0 0.8-0.7 1.2-0.3 0.1-0.4 0.2-4.8 2.5-8 2.5-2 0-3.5-0.7l-0.6-0.3q-1.4-0.8-2.2-1.1t-1.9-0.6-2.5-0.3q-2.2 0-5.1 0.9t-5 2.3q-0.3 0.2-0.7 0.2-0.4 0-0.7-0.2-0.7-0.4-0.7-1.2v-16.2q0-0.8 0.6-1.2 0.8-0.4 1.8-0.9t2.4-1.1 3.4-1.1 3.3-0.4q2.5 0 4.6 0.6t4.5 1.9q0.9 0.4 2 0.4 2.6 0 6.7-2.4l0.7-0.4q0.7-0.3 1.4 0.1 0.6 0.4 0.6 1.2z' })
                )
            );
        }
    }]);

    return FaFlagO;
}(React.Component);

exports.default = FaFlagO;
module.exports = exports['default'];