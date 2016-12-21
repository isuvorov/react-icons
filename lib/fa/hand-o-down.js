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

var FaHandODown = function (_React$Component) {
    _inherits(FaHandODown, _React$Component);

    function FaHandODown() {
        _classCallCheck(this, FaHandODown);

        return _possibleConstructorReturn(this, (FaHandODown.__proto__ || Object.getPrototypeOf(FaHandODown)).apply(this, arguments));
    }

    _createClass(FaHandODown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.4 21.4q0-1.8-0.7-4.1t-1.4-4.3-0.7-3.7v-0.7h-14.3v0.7q0 0.8-0.3 1.5t-0.8 1.4-1 1.1-1.2 1.1q-0.2 0.2-0.4 0.3-1.8 1.6-3.2 2.5-0.5 0.3-1.5 0.8-0.1 0-0.5 0.2t-0.8 0.5-0.8 0.4-0.7 0.5-0.2 0.4q0 1.6 0.6 2.6t2.2 1q1 0 1.9-0.4t1.5-0.7 1.2-0.7 1.1-0.4v12.9q0 1.1 0.9 2t2 0.8q1.1 0 2-0.8t0.8-2v-7.4q1.1 0.8 2.3 0.8 1.6 0 2.7-1.2 0.7 0.4 1.5 0.4t1.7-0.4 1.1-1.1q0.6 0.1 1.3 0.1 1.9 0 2.8-1t0.9-3.1z m-2.8-17.1q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m5.7 17q0 3.2-1.7 5.2t-4.9 1.9l-0.1 0q-1.7 1.4-4 1.4-0.5 0-0.9-0.1-1.2 0.7-2.7 0.8v3.8q0 2.3-1.7 4t-4 1.7q-2.3 0-4-1.7t-1.7-4v-8.4q-1.2 0.5-2.9 0.5-2.7 0-4.2-1.8t-1.5-4.6q0-0.8 0.4-1.6t1.1-1.2 1.4-0.9 1.6-0.8 1.4-0.7q1.2-0.8 2.9-2.3 0 0 0.3-0.3t0.5-0.4 0.5-0.5 0.5-0.5 0.4-0.5 0.3-0.5 0.1-0.5v-6.4q0-1.2 0.9-2.1t2-0.8h14.3q1.2 0 2 0.8t0.8 2.1v6.4q0 1.3 1.3 5 1.6 4.2 1.6 7z' })
                )
            );
        }
    }]);

    return FaHandODown;
}(React.Component);

exports.default = FaHandODown;
module.exports = exports['default'];