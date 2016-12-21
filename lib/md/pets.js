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

var MdPets = function (_React$Component) {
    _inherits(MdPets, _React$Component);

    function MdPets() {
        _classCallCheck(this, MdPets);

        return _possibleConstructorReturn(this, (MdPets.__proto__ || Object.getPrototypeOf(MdPets)).apply(this, arguments));
    }

    _createClass(MdPets, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.9 24.8c2.2 2.2 4.9 4.5 4.4 7.9-0.5 1.8-1.7 3.5-3.9 3.9-1.3 0.3-5.1-0.7-9.2-0.7h-0.4c-4.1 0-7.9 1-9.2 0.7-2.2-0.4-3.4-2.1-3.9-3.9-0.4-3.3 2.2-5.8 4.4-7.9 1.5-1.8 2.7-3.2 4.1-4.9 0.8-0.9 1.8-1.8 2.9-2.2 0.2 0 0.4-0.1 0.6-0.1 0.4-0.1 0.8-0.1 1.3-0.1s0.9 0 1.3 0.1c0.2 0 0.4 0.1 0.6 0.1 1.1 0.4 2.1 1.3 2.9 2.2 1.4 1.7 2.6 3.1 4.1 4.9z m-0.5-8.9c0-2.3 1.8-4.3 4.1-4.3s4.1 2 4.1 4.3-1.8 4.1-4.1 4.1-4.1-1.9-4.1-4.1z m-7.5-6.8c0-2.2 1.8-4.1 4.1-4.1s4.1 1.9 4.1 4.1-1.8 4.3-4.1 4.3-4.1-2-4.1-4.3z m-10 0c0-2.2 1.8-4.1 4.1-4.1s4.1 1.9 4.1 4.1-1.8 4.3-4.1 4.3-4.1-2-4.1-4.3z m-7.5 6.8c0-2.3 1.8-4.3 4.1-4.3s4.1 2 4.1 4.3-1.8 4.1-4.1 4.1-4.1-1.9-4.1-4.1z' })
                )
            );
        }
    }]);

    return MdPets;
}(React.Component);

exports.default = MdPets;
module.exports = exports['default'];