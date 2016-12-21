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

var FaAsterisk = function (_React$Component) {
    _inherits(FaAsterisk, _React$Component);

    function FaAsterisk() {
        _classCallCheck(this, FaAsterisk);

        return _possibleConstructorReturn(this, (FaAsterisk.__proto__ || Object.getPrototypeOf(FaAsterisk)).apply(this, arguments));
    }

    _createClass(FaAsterisk, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.6 23.4q1 0.6 1.3 1.8t-0.3 2.1l-1.4 2.5q-0.6 1-1.7 1.3t-2.2-0.3l-5.9-3.4v6.9q0 1.1-0.9 2t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2v-6.9l-6 3.4q-1 0.6-2.1 0.3t-1.8-1.3l-1.4-2.5q-0.6-1-0.3-2.1t1.4-1.8l5.9-3.4-5.9-3.4q-1.1-0.6-1.4-1.8t0.3-2.1l1.4-2.5q0.6-1 1.8-1.3t2.1 0.3l6 3.4v-6.9q0-1.1 0.8-2t2-0.8h2.9q1.2 0 2 0.8t0.9 2v6.9l5.9-3.4q1-0.6 2.2-0.3t1.7 1.3l1.4 2.5q0.6 1 0.3 2.1t-1.3 1.8l-6 3.4z' })
                )
            );
        }
    }]);

    return FaAsterisk;
}(React.Component);

exports.default = FaAsterisk;
module.exports = exports['default'];