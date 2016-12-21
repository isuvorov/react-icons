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

var FaVine = function (_React$Component) {
    _inherits(FaVine, _React$Component);

    function FaVine() {
        _classCallCheck(this, FaVine);

        return _possibleConstructorReturn(this, (FaVine.__proto__ || Object.getPrototypeOf(FaVine)).apply(this, arguments));
    }

    _createClass(FaVine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.4 18.5v4.4q-2.2 0.5-4.4 0.5-1.5 3-3.7 6t-4 4.9-2.9 2.3q-1.8 1-3.6 0-0.6-0.4-1.4-1t-1.9-1.9-2.3-2.8-2.4-4.1-2.3-5.5-2.1-7-1.5-8.7h6.3q0.6 4.8 1.6 8.9t2.3 7.1 2.7 5.2 3.1 4.4q3.8-3.8 6.4-9.1-3.1-1.6-4.9-4.9t-1.9-7.4q0-4.3 2.4-7.1t6.3-2.7q4 0 6.1 2.4t2.1 6.6q0 3.5-1.3 6.4-0.1 0-0.4 0t-1 0.1-1.4-0.1-1.4-0.6-1.2-1.2q0.7-2.3 0.7-4.1 0-1.9-0.6-2.9t-1.8-1q-1.2 0-1.9 1.1t-0.7 3.1q0 4.2 2.4 6.6t5.9 2.4q1.4 0 2.7-0.3z' })
                )
            );
        }
    }]);

    return FaVine;
}(React.Component);

exports.default = FaVine;
module.exports = exports['default'];