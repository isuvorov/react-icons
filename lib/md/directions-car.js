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

var MdDirectionsCar = function (_React$Component) {
    _inherits(MdDirectionsCar, _React$Component);

    function MdDirectionsCar() {
        _classCallCheck(this, MdDirectionsCar);

        return _possibleConstructorReturn(this, (MdDirectionsCar.__proto__ || Object.getPrototypeOf(MdDirectionsCar)).apply(this, arguments));
    }

    _createClass(MdDirectionsCar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.4 18.4h23.2l-2.5-7.5h-18.2z m20.7 8.2c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-18.2 0c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m20.7-16.6l3.4 10v13.4c0 0.9-0.7 1.6-1.6 1.6h-1.8c-0.9 0-1.6-0.7-1.6-1.6v-1.8h-20v1.8c0 0.9-0.7 1.6-1.6 1.6h-1.8c-0.9 0-1.6-0.7-1.6-1.6v-13.4l3.4-10c0.4-1 1.4-1.6 2.5-1.6h18.2c1.1 0 2.2 0.6 2.5 1.6z' })
                )
            );
        }
    }]);

    return MdDirectionsCar;
}(React.Component);

exports.default = MdDirectionsCar;
module.exports = exports['default'];