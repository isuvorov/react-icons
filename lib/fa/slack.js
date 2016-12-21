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

var FaSlack = function (_React$Component) {
    _inherits(FaSlack, _React$Component);

    function FaSlack() {
        _classCallCheck(this, FaSlack);

        return _possibleConstructorReturn(this, (FaSlack.__proto__ || Object.getPrototypeOf(FaSlack)).apply(this, arguments));
    }

    _createClass(FaSlack, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.4 17.3q1.4 0 2.3 0.9t0.9 2.3q0 2.2-2 2.9l-3.9 1.3 1.3 3.7q0.1 0.5 0.1 1.1 0 1.3-0.9 2.3t-2.3 0.9q-1 0-1.9-0.6t-1.2-1.6l-1.2-3.7-6.9 2.4 1.2 3.7q0.2 0.5 0.2 1 0 1.3-0.9 2.3t-2.3 0.9q-1.1 0-1.9-0.6t-1.2-1.6l-1.2-3.6-3.4 1.2q-0.7 0.2-1.2 0.2-1.3 0-2.2-0.9t-0.9-2.3q0-1 0.6-1.9t1.6-1.1l3.5-1.2-2.4-7-3.5 1.2q-0.5 0.2-1 0.2-1.4 0-2.3-0.9t-0.9-2.3q0-1 0.6-1.9t1.6-1.2l3.5-1.1-1.2-3.6q-0.1-0.5-0.1-1 0-1.4 0.9-2.3t2.3-1q1 0 1.9 0.6t1.1 1.6l1.3 3.6 6.9-2.3-1.2-3.6q-0.2-0.5-0.2-1.1 0-1.3 0.9-2.2t2.3-1q1.1 0 1.9 0.6t1.2 1.6l1.2 3.6 3.6-1.2q0.5-0.2 1-0.2 1.3 0 2.3 0.9t0.9 2.2q0 1-0.7 1.8t-1.6 1.2l-3.5 1.2 2.3 7.1 3.7-1.3q0.5-0.2 1-0.2z m-17.7 5.9l6.9-2.4-2.3-7-7 2.4z' })
                )
            );
        }
    }]);

    return FaSlack;
}(React.Component);

exports.default = FaSlack;
module.exports = exports['default'];