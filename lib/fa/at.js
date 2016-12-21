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

var FaAt = function (_React$Component) {
    _inherits(FaAt, _React$Component);

    function FaAt() {
        _classCallCheck(this, FaAt);

        return _possibleConstructorReturn(this, (FaAt.__proto__ || Object.getPrototypeOf(FaAt)).apply(this, arguments));
    }

    _createClass(FaAt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.7 17.3q0-2.4-1.2-3.8t-3.3-1.3q-1.4 0-2.8 0.6t-2.4 1.9-1.8 3.1-0.7 4q0 2.5 1.2 3.9t3.4 1.3q2.1 0 3.9-1.5t2.7-3.7 1-4.5z m12.6 2.7q0 2.5-0.8 4.4t-2.2 3-3 1.7-3.2 0.6q-0.1 0-0.4 0t-0.3 0q-2.1 0-3.2-1.2-0.6-0.7-0.7-1.8-1.2 1.4-3 2.4t-3.8 1q-3.6 0-5.6-2.1t-2-6q0-3.5 1.5-6.5t4-4.7 5.5-1.7q1.9 0 3.4 0.7t2.4 2.3l0-0.5 0.3-1.2q0-0.1 0.1-0.3t0.2-0.1h2.7q0.1 0 0.3 0.2 0.1 0.2 0 0.4l-2.7 13.7q-0.1 0.5-0.1 1.1 0 0.8 0.3 1.1t1 0.3q0.6 0 1.3-0.1t1.6-0.5 1.7-1.2 1.3-1.9 0.5-3.1q0-6.5-3.9-10.4t-10.4-3.9q-2.9 0-5.5 1.1t-4.6 3.1-3 4.5-1.1 5.6 1.1 5.5 3 4.6 4.6 3 5.5 1.2q5.1 0 9.1-3.2 0.2-0.2 0.5-0.2t0.5 0.3l0.9 1.1q0.2 0.2 0.2 0.5-0.1 0.3-0.3 0.5-2.3 1.8-5.1 2.8t-5.8 1q-3.4 0-6.6-1.3t-5.5-3.7-3.6-5.5-1.4-6.6 1.4-6.7 3.6-5.4 5.5-3.7 6.6-1.3q7.7 0 12.5 4.7t4.7 12.4z' })
                )
            );
        }
    }]);

    return FaAt;
}(React.Component);

exports.default = FaAt;
module.exports = exports['default'];