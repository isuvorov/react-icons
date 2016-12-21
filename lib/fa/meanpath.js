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

var FaMeanpath = function (_React$Component) {
    _inherits(FaMeanpath, _React$Component);

    function FaMeanpath() {
        _classCallCheck(this, FaMeanpath);

        return _possibleConstructorReturn(this, (FaMeanpath.__proto__ || Object.getPrototypeOf(FaMeanpath)).apply(this, arguments));
    }

    _createClass(FaMeanpath, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.3 18.8v2.5q0 0.6-0.3 0.9t-0.9 0.3h-4.5q-0.5 0-0.8-0.3t-0.3-0.9v-2.5q0-0.5 0.3-0.9t0.8-0.3h4.5q0.6 0 0.9 0.3t0.3 0.9z m-11 5.1v-5.5q0-1.2-0.7-2t-1.9-0.7h-3q-1.5 0-2.1 1.2-0.6-1.2-2.2-1.2h-2.9q-1.1 0-1.9 0.7t-0.7 2v5.5q0 0.5 0.5 0.5h1.2q0.5 0 0.5-0.5v-5.1q0-0.5 0.3-0.9t0.9-0.3h2q0.6 0 0.9 0.3t0.3 0.9v5.1q0 0.5 0.5 0.5h1.2q0.5 0 0.5-0.5v-5.1q0-0.5 0.3-0.9t0.8-0.3h2.2q0.5 0 0.8 0.3t0.3 0.9v5.1q0 0.5 0.5 0.5h1.3q0.4 0 0.4-0.5z m13.2-2.1v-3.5q0-1.1-0.8-1.9t-1.9-0.7h-5.9q-1.2 0-1.9 0.7t-0.7 1.9v9.2q0 0.5 0.5 0.5h1.2q0.5 0 0.5-0.5v-4q0.6 0.9 2.1 0.9h4.2q1.2 0 1.9-0.7t0.8-1.9z m2.8-13.8v24q0 2.1-1.5 3.6t-3.7 1.5h-23.9q-2.2 0-3.7-1.5t-1.5-3.6v-24q0-2.1 1.5-3.6t3.7-1.5h23.9q2.1 0 3.7 1.5t1.5 3.6z' })
                )
            );
        }
    }]);

    return FaMeanpath;
}(React.Component);

exports.default = FaMeanpath;
module.exports = exports['default'];