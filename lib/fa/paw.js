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

var FaPaw = function (_React$Component) {
    _inherits(FaPaw, _React$Component);

    function FaPaw() {
        _classCallCheck(this, FaPaw);

        return _possibleConstructorReturn(this, (FaPaw.__proto__ || Object.getPrototypeOf(FaPaw)).apply(this, arguments));
    }

    _createClass(FaPaw, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.9 10.5q0 1.4-0.4 2.6t-1.4 2-2.4 0.9q-1.7 0-3-1.3t-2.1-3-0.7-3.4q0-1.3 0.5-2.5t1.4-2.1 2.3-0.8q1.7 0 3.1 1.2t2 3.1 0.7 3.3z m-7.6 10.8q0 1.8-1 3.1t-2.6 1.3q-1.7 0-3.2-1.2t-2.2-3-0.8-3.4q0-1.8 0.9-3.1t2.7-1.3q1.7 0 3.2 1.2t2.2 3 0.8 3.4z m8.8-0.6q2.6 0 5.7 2.2t5.1 5.3 2 5.7q0 1-0.3 1.7t-1.1 1-1.5 0.4-1.7 0.1q-1.5 0-4.2-1t-4-1q-1.5 0-4.3 1t-4.5 1q-4.1 0-4.1-3.2 0-2 1.3-4.3t3.1-4.3 4.2-3.3 4.3-1.3z m5.3-4.7q-1.4 0-2.3-0.9t-1.4-2-0.5-2.6q0-1.6 0.7-3.3t2-3.1 3.1-1.2q1.4 0 2.4 0.8t1.4 2.1 0.4 2.5q0 1.7-0.7 3.4t-2 3-3.1 1.3z m9.7-2.3q1.7 0 2.6 1.3t0.9 3.1q0 1.7-0.7 3.4t-2.3 3-3.1 1.2q-1.8 0-2.7-1.3t-0.9-3.1q0-1.6 0.7-3.4t2.3-3 3.2-1.2z' })
                )
            );
        }
    }]);

    return FaPaw;
}(React.Component);

exports.default = FaPaw;
module.exports = exports['default'];