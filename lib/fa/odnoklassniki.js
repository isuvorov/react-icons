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

var FaOdnoklassniki = function (_React$Component) {
    _inherits(FaOdnoklassniki, _React$Component);

    function FaOdnoklassniki() {
        _classCallCheck(this, FaOdnoklassniki);

        return _possibleConstructorReturn(this, (FaOdnoklassniki.__proto__ || Object.getPrototypeOf(FaOdnoklassniki)).apply(this, arguments));
    }

    _createClass(FaOdnoklassniki, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 20.2q-4.2 0-7.2-2.9t-2.9-7.2q0-4.2 2.9-7.1t7.2-3 7.1 3 3 7.1q0 4.2-3 7.2t-7.1 2.9z m0-15.1q-2.1 0-3.5 1.5t-1.5 3.5q0 2.1 1.5 3.5t3.5 1.5 3.5-1.5 1.5-3.5q0-2-1.5-3.5t-3.5-1.5z m11.7 16.4q0.3 0.6 0.3 1.1t-0.1 0.9-0.6 0.8-0.9 0.9-1.4 0.9q-2.6 1.6-7 2.1l1.6 1.6 5.9 6q0.7 0.7 0.7 1.6t-0.7 1.6l-0.2 0.3q-0.7 0.7-1.7 0.7t-1.6-0.7q-1.5-1.5-6-6l-6 6q-0.6 0.7-1.6 0.7t-1.6-0.7l-0.3-0.3q-0.7-0.6-0.7-1.6t0.7-1.6l7.6-7.6q-4.6-0.5-7.1-2.1-0.9-0.6-1.4-0.9t-0.9-0.9-0.6-0.8-0.1-0.9 0.3-1.1q0.2-0.5 0.6-0.8t1-0.5 1.2 0 1.5 0.8q0.1 0.1 0.3 0.3t1 0.5 1.5 0.7 2.1 0.5 2.5 0.3q2 0 3.9-0.6t2.6-1.1l0.9-0.6q0.7-0.5 1.4-0.8t1.3 0 0.9 0.5 0.7 0.8z' })
                )
            );
        }
    }]);

    return FaOdnoklassniki;
}(React.Component);

exports.default = FaOdnoklassniki;
module.exports = exports['default'];