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

var FaPagelines = function (_React$Component) {
    _inherits(FaPagelines, _React$Component);

    function FaPagelines() {
        _classCallCheck(this, FaPagelines);

        return _possibleConstructorReturn(this, (FaPagelines.__proto__ || Object.getPrototypeOf(FaPagelines)).apply(this, arguments));
    }

    _createClass(FaPagelines, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.8 24.6q-0.7 1.8-1.7 3.1t-2 2-2.2 1-2.3 0.3-2.2-0.2-1.9-0.4-1.5-0.7-1.1-0.5l-0.4-0.2q-2.5 5.1-6.4 8t-8.6 3q-0.4 0-0.7-0.3t-0.3-0.7 0.3-0.7 0.7-0.3q3.9 0 7.2-2.4t5.6-6.6q-0.8 0.4-1.6 0.6t-1.8 0.2-2.1 0-2-0.6-2.1-1.4-1.9-2.2-1.6-3.3q2.5-1 4.7-1.2t3.8 0.1 2.7 1.3 2 1.7 1.3 1.9q1.2-3 1.7-6.5-0.1 0-0.4 0t-1 0.1-1.5 0-1.9-0.3-1.9-0.5-1.9-0.9-1.7-1.5-1.2-2.1-0.6-2.8q1.5-0.7 2.9-0.9t2.5 0.1 2.1 0.6 1.6 1.2 1.3 1.3 0.9 1.4 0.6 1.3 0.4 0.9l0.1 0.3q0.3-2.7 0.3-4.3-0.2-0.2-0.5-0.4t-1.1-1-1.4-1.6-1.2-2.1-0.8-2.5 0.3-2.8 1.6-3.1q1.6 0.6 2.8 1.4t1.9 1.7 1.1 1.9 0.4 2 0 1.9-0.3 1.7-0.4 1.4-0.4 0.9l-0.1 0.3q0 0.2 0 1.2t0 1.6q0-0.2 0.2-0.4t0.7-1 1.1-1.3 1.6-1.2 2-1 2.5-0.4 3 0.6q-0.1 1.7-0.5 3.1t-1.1 2.4-1.6 1.6-1.8 1-1.9 0.5-1.8 0.2-1.5 0-1-0.1l-0.4-0.1q-0.5 3.3-1.6 6.4 0.1-0.2 0.4-0.5t1.1-0.9 1.7-1.1 2.2-1 2.7-0.4 2.8 0.5 3.1 1.7z' })
                )
            );
        }
    }]);

    return FaPagelines;
}(React.Component);

exports.default = FaPagelines;
module.exports = exports['default'];