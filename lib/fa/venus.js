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

var FaVenus = function (_React$Component) {
    _inherits(FaVenus, _React$Component);

    function FaVenus() {
        _classCallCheck(this, FaVenus);

        return _possibleConstructorReturn(this, (FaVenus.__proto__ || Object.getPrototypeOf(FaVenus)).apply(this, arguments));
    }

    _createClass(FaVenus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.2 12.9q0 4.9-3.3 8.5t-8.1 4.2v5.8h5q0.3 0 0.5 0.2t0.2 0.5v1.5q0 0.3-0.2 0.5t-0.5 0.2h-5v5q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-5h-5q-0.3 0-0.5-0.2t-0.2-0.5v-1.5q0-0.3 0.2-0.5t0.5-0.2h5v-5.8q-3.3-0.3-6-2.3t-4.2-5-1.2-6.5q0.3-3 1.8-5.5t4.1-4.2 5.5-2q3.8-0.4 7.1 1.2t5.3 4.7 1.9 6.9z m-22.8 0q0 4.1 2.9 7t7.1 3 7-3 3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1z' })
                )
            );
        }
    }]);

    return FaVenus;
}(React.Component);

exports.default = FaVenus;
module.exports = exports['default'];