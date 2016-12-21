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

var FaHandPaperO = function (_React$Component) {
    _inherits(FaHandPaperO, _React$Component);

    function FaHandPaperO() {
        _classCallCheck(this, FaHandPaperO);

        return _possibleConstructorReturn(this, (FaHandPaperO.__proto__ || Object.getPrototypeOf(FaHandPaperO)).apply(this, arguments));
    }

    _createClass(FaHandPaperO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.6 2.9q-1 0-1.7 0.7t-0.8 1.8v14.6h-0.7v-11.8q0-1-0.7-1.7t-1.8-0.8-1.7 0.8-0.8 1.7v17.5l-3.4-4.6q-0.9-1.1-2.3-1.1-1.2 0-2 0.8t-0.8 2.1q0 0.9 0.5 1.7l8.6 11.4q0.9 1.1 2.3 1.1h15.3q0.8 0 1.4-0.4t0.8-1.3l1.7-9q0.1-0.8 0.1-1.4v-11.1q0-1-0.8-1.7t-1.7-0.8-1.8 0.8-0.7 1.7v6.1h-0.7v-11.8q0-1-0.8-1.7t-1.7-0.8-1.8 0.8-0.7 1.7v11.8h-0.8v-14.6q0-1.1-0.7-1.8t-1.8-0.7z m0-2.9q1.6 0 2.8 0.8t2 2.1q0.4 0 1 0 2.2 0 3.7 1.5t1.6 3.8v0.4q2.4-0.1 4 1.4t1.7 3.9v11.1q0 0.9-0.2 1.9l-1.6 9q-0.4 1.8-1.8 2.9t-3.2 1.2h-15.3q-1.4 0-2.6-0.6t-2-1.7l-8.6-11.4q-1.1-1.5-1.1-3.4 0-2.4 1.7-4.1t4-1.7q1.8 0 2.9 0.8v-9.7q0-2.2 1.5-3.8t3.8-1.5q0.5 0 1 0 0.7-1.3 1.9-2.1t2.8-0.8z' })
                )
            );
        }
    }]);

    return FaHandPaperO;
}(React.Component);

exports.default = FaHandPaperO;
module.exports = exports['default'];