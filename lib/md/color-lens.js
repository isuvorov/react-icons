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

var MdColorLens = function (_React$Component) {
    _inherits(MdColorLens, _React$Component);

    function MdColorLens() {
        _classCallCheck(this, MdColorLens);

        return _possibleConstructorReturn(this, (MdColorLens.__proto__ || Object.getPrototypeOf(MdColorLens)).apply(this, arguments));
    }

    _createClass(MdColorLens, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.1 20q1.1 0 1.8-0.7t0.7-1.8-0.7-1.8-1.8-0.7-1.7 0.7-0.8 1.8 0.8 1.8 1.7 0.7z m-5-6.6q1.1 0 1.8-0.8t0.7-1.7-0.7-1.8-1.8-0.7-1.7 0.7-0.8 1.8 0.8 1.7 1.7 0.8z m-8.2 0q1 0 1.7-0.8t0.8-1.7-0.8-1.8-1.7-0.7-1.8 0.7-0.7 1.8 0.7 1.7 1.8 0.8z m-5 6.6q1 0 1.7-0.7t0.8-1.8-0.8-1.8-1.7-0.7-1.8 0.7-0.7 1.8 0.7 1.8 1.8 0.7z m9.1-15q6.2 0 10.6 3.9t4.4 9.5q0 3.4-2.5 5.8t-5.9 2.4h-2.8q-1.1 0-1.8 0.8t-0.7 1.7q0 0.9 0.6 1.7t0.6 1.7q0 1.1-0.7 1.8t-1.8 0.7q-6.2 0-10.6-4.4t-4.4-10.6 4.4-10.6 10.6-4.4z' })
                )
            );
        }
    }]);

    return MdColorLens;
}(React.Component);

exports.default = MdColorLens;
module.exports = exports['default'];